const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Reliable Business Services, LLC</h3>
            <p className="opacity-80 leading-relaxed">
              Specialized Healthcare Billing Solutions and Revenue Cycle Management
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Results</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 opacity-80">
              <li>Revenue Cycle Management</li>
              <li>Medical Billing</li>
              <li>Claims Processing</li>
              <li>Account Management</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center opacity-80">
          <p>&copy; 2025 Reliable Business Services, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
