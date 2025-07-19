"use server"

export async function submitToWebhook(formData: FormData) {
  const firstName = formData.get('FIRST_NAME') as string
  const lastName = formData.get('LAST_NAME') as string
  const email = formData.get('EMAIL') as string
  const note = formData.get('NOTE') as string

  const webhookUrl = process.env.WEBHOOK_URL
  
  if (!webhookUrl) {
    console.error('WEBHOOK_URL environment variable is not set')
    return { success: false, message: 'Configuration error. Please contact support.' }
  }

  const webhookData = {
    FIRST_NAME: firstName,
    LAST_NAME: lastName,
    EMAIL: email,
    NOTE: note,
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    })

    if (response.ok) {
      return { success: true, message: 'Successfully submitted!' }
    } else {
      console.error('Webhook submission failed:', response.statusText, await response.text())
      return { success: false, message: 'Submission failed. Please try again.' }
    }
  } catch (error) {
    console.error('Webhook submission error:', error)
    return { success: false, message: 'Network error. Please try again.' }
  }
}