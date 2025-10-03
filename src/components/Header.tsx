import logo from "@/assets/dms-logo.jpg";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <img 
            src={logo} 
            alt="Diligent Management Solutions, LLC Logo" 
            className="h-12 w-auto object-contain"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              Diligent Management Solutions, LLC
            </h1>
            <p className="text-sm text-muted-foreground">
              Specialized Revenue Cycle Management
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
