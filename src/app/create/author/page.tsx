import CreateAuthorForm from "@/components/forms/author";

// Create author page
export default function CreateAuthor() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Create author</h1>
      <div className="mt-4">
        <CreateAuthorForm />
      </div>
    </div>
  )
}