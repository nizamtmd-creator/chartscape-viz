import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

const revenueData = [
  { month: "Jan", year2022: 3200000, year2023: 2800000 },
  { month: "Feb", year2022: 3400000, year2023: 2900000 },
  { month: "Mar", year2022: 3600000, year2023: 3100000 },
  { month: "Apr", year2022: 3500000, year2023: 3000000 },
  { month: "May", year2022: 3700000, year2023: 3200000 },
  { month: "Jun", year2022: 3800000, year2023: 3100000 },
  { month: "Jul", year2022: 3900000, year2023: 3300000 },
  { month: "Aug", year2022: 4000000, year2023: 3200000 },
  { month: "Sep", year2022: 4100000, year2023: 3100000 },
  { month: "Oct", year2022: 4200000, year2023: 3000000 },
  { month: "Nov", year2022: 4000000, year2023: 2900000 },
  { month: "Dec", year2022: 3800000, year2023: 2800000 }
];

const paymentData = [
  { month: "Jan", year2022: 420000, year2023: 580000 },
  { month: "Feb", year2022: 450000, year2023: 620000 },
  { month: "Mar", year2022: 480000, year2023: 640000 },
  { month: "Apr", year2022: 460000, year2023: 610000 },
  { month: "May", year2022: 490000, year2023: 650000 },
  { month: "Jun", year2022: 510000, year2023: 660000 },
  { month: "Jul", year2022: 520000, year2023: 680000 },
  { month: "Aug", year2022: 530000, year2023: 670000 },
  { month: "Sep", year2022: 540000, year2023: 690000 },
  { month: "Oct", year2022: 550000, year2023: 700000 },
  { month: "Nov", year2022: 560000, year2023: 710000 },
  { month: "Dec", year2022: 570000, year2023: 720000 }
];

const Statistics = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
            Proven Results
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Dramatic reduction in aging account receivables over 12 months
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center bg-gradient-to-br from-primary to-primary-glow text-white">
            <div className="text-4xl font-bold mb-2">94%</div>
            <div className="text-base opacity-90">Collection Rate</div>
            <div className="text-xs opacity-75 mt-1">vs 75% industry standard</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-secondary to-accent text-white">
            <div className="text-4xl font-bold mb-2">10-20%</div>
            <div className="text-base opacity-90">Revenue Increase</div>
            <div className="text-xs opacity-75 mt-1">Without additional encounters</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-accent to-secondary text-white">
            <div className="text-4xl font-bold mb-2">24hrs</div>
            <div className="text-base opacity-90">Claim Filing</div>
            <div className="text-xs opacity-75 mt-1">Fast turnaround time</div>
          </Card>
        </div>

        <Card className="p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Financial Summary: Aging Receivables Reduction
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="year2022" 
                stroke="hsl(var(--destructive))" 
                strokeWidth={3}
                name="2022 Aging Receivables"
                dot={{ fill: "hsl(var(--destructive))", r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="year2023" 
                stroke="hsl(var(--accent))" 
                strokeWidth={3}
                name="2023 Aging Receivables"
                dot={{ fill: "hsl(var(--accent))", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Significant reduction in aging receivables demonstrates improved cash flow
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Payment Summary: 2022 vs 2023
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={paymentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }} 
              />
              <Legend />
              <Bar dataKey="year2022" fill="hsl(var(--primary))" name="2022 Payments" radius={[8, 8, 0, 0]} />
              <Bar dataKey="year2023" fill="hsl(var(--secondary))" name="2023 Payments" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Consistent payment growth year over year
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Statistics;
