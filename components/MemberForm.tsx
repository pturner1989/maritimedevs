"use client"

import { submitToWebhook } from "@/lib/actions"
import { useState } from "react"

export default function MemberForm() {
    const [status, setStatus] = useState<{ message: string; success: boolean } | null>(null)

    const handleSubmit = async (formData: FormData) => {
        setStatus(null)
        const result = await submitToWebhook(formData)
        setStatus(result)
    }

    return (
        <form action={handleSubmit}>
            <div>
                <div className="pb-2">
                    <input name="FIRST_NAME" className="input" placeholder="First name" />
                </div>
                <div className="pb-2">
                    <input name="LAST_NAME" className="input" placeholder="Last name" />
                </div>
                <div className="pb-2">
                    <input name="EMAIL" type="email" className="input" placeholder="Email" />
                </div>
                <div className="pb-2">
                    <textarea name="NOTE" className="textarea" placeholder="What are you working on?">

                    </textarea>
                </div>
                <div className="pt-4">
                    <button className="btn btn-primary">Request Invite</button>
                    {status && (
                        <div className={`text-sm pt-2 ${status.success ? 'text-green-600' : 'text-red-600'}`}>
                            {status.message}
                        </div>
                    )}
                    <div className="text-xs pt-4 text-accent">By completing this form you agree for us to store your details in order to review your membership request and notify you of membership activities/meetups. No spam.</div>
                </div>
            </div>
        </form>
    )
}