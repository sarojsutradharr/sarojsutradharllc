import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RefreshCw, Home } from 'lucide-react';
import PageMeta from '@/components/common/PageMeta';

export default function ServerError() {
  return (
    <div className="pt-[52px] min-h-screen flex items-center justify-center bg-white">
      <PageMeta
        title="Server Error — SarojSutradharLLC"
        description="Something went wrong on our end. Please try again or return to the homepage."
      />
      <div className="max-w-[500px] mx-auto px-6 text-center">
        <h1 className="text-[72px] md:text-[96px] font-semibold text-destructive leading-none tracking-tight">
          500
        </h1>
        <h2 className="mt-4 text-[24px] md:text-[28px] font-semibold text-foreground tracking-tight">
          Server Error
        </h2>
        <p className="mt-4 text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
          Something went wrong on our end. We are working to fix it. Please try refreshing the page or return home.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="rounded-full text-[14px] h-11 px-7 border-primary text-primary hover:bg-primary/5 font-medium inline-flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh Page
          </Button>
          <Button
            asChild
            className="rounded-full text-[14px] h-11 px-7 bg-primary text-primary-foreground hover:bg-primary/90 font-medium inline-flex items-center gap-2"
          >
            <Link to="/">
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
