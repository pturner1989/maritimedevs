import MemberForm from "@/components/MemberForm";
import HomeMD from "../markdown/Home.mdx"

export default function Home() {
  return (
    <div className="max-w-prose mx-auto">
      <HomeMD />
      <div className="border-0 rounded mt-10 p-4">
      <MemberForm />
      </div>
    </div>  
    );
}
