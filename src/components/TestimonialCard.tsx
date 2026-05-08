interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-primary text-4xl font-serif mb-4">&ldquo;</div>
      <p className="text-gray-700 italic mb-4">{quote}</p>
      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-600">
          {role}, {company}
        </p>
      </div>
    </div>
  );
}
