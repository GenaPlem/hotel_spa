export default function Footer() {
  return (
    <footer className="flex justify-between pt-10 pb-1 mt-6 text-gray-500">
      <p className="mx-auto">
        &copy; {new Date().getFullYear()} Hotels App. All rights reserved.
      </p>
    </footer>
  );
}
