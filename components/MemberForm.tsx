"use client"

export default function MemberForm() {

    return (
        <form action="https://service.capsulecrm.com/service/newlead" method="post">
            <input type="hidden" name="FORM_ID" value="7c4d9998-d2a6-4cc7-8f54-5b508ed901bf" />
            <input type="hidden" name="COMPLETE_URL" value={process.env.NEXT_PUBLIC_REDIRECT ?? 'https://maritimedevs.com'} />
            <input type="hidden" name="DEVELOPER" value={process.env.NODE_ENV === "development" ? "TRUE" : "FALSE"} />
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
                    <div className="text-xs pt-4 text-accent">By completing this form you agree for us to store your details in order to review your membership request and notify you of membership activities/meetups. No spam.</div>
                </div>
            </div>
        </form>
    )
}