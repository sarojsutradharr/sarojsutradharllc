import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-[52px] min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-[500px] mx-auto px-6 text-center">
        <h1 className="text-[72px] md:text-[96px] font-semibold text-primary leading-none tracking-tight">
          404
        </h1>
        <h2 className="mt-4 text-[24px] md:text-[28px] font-semibold text-foreground tracking-tight">
          Page Not Found
        </h2>
        <p className="mt-4 text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Button
          asChild
          className="mt-8 rounded-full text-[14px] h-11 px-7 bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
        >
          <Link to="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
