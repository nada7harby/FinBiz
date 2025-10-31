import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SpendOverviewCard } from "../ui/SpendOverviewCard";
 const spendData = [
    {
      time: '12:00AM',
      value: 4000,
    },
    {
      time: '01:00AM',
      value: 4500,
    },
    {
      time: '02:00AM',
      value: 5500,
    },
    {
      time: '03:00AM',
      value: 6000,
    },
    {
      time: '04:00AM',
      value: 5200,
    },
    {
      time: '05:00AM',
      value: 4800,
    },
    {
      time: '06:00AM',
      value: 5800,
    },
    {
      time: '07:00AM',
      value: 4500,
    },
    {
      time: '08:00AM',
      value: 5000,
    },
    {
      time: '09:00AM',
      value: 6000,
    },
    {
      time: '10:00AM',
      value: 5500,
    },
    {
      time: '11:00AM',
      value: 5000,
    },
  ]


const topMetrics = [
  { 
    label: "Total Profit", 
    value: "$350.240", 
    change: "+18.23",
    bars: [40, 50, 70, 50],
    barColor: [  "bg-[#72A7008A]", "bg-[#72A7008A]", "bg-[#72A700]","bg-[#72A7008A]"]
  },
  { 
    label: "Total revenue", 
    value: "$400.690", 
    change: "+28.35",
    bars: [60, 80, 90, 70],
    barColor: [  "bg-[#EE1F1F70]", "bg-[#EE1F1F70]", "bg-[#EE1F1F]","bg-[#EE1F1F70]"]
  },
  { 
    label: "Product sold", 
    value: "$200.000", 
    change: "+28.35",
    bars: [50, 70, 85, 65],
    barColor:[ "bg-[#003FDB6E]", "bg-[#003FDB6E]", "bg-[#003FDB]", "bg-[#003FDB6E]"]
  },
];

const employeeCategories = [
  { label: "Employee", progressF: 55, progressL: 85 },
  { label: "Independent Contractor", progressF: 60, progressL: 80 },
  { label: "Contracted Employee", progressF: 45, progressL: 75 },
  { label: "Stakeholders", progressF: 30, progressL: 70 },
];

export function StatsSection() {
  const [activeTab, setActiveTab] = useState("Yearly");

  return (
    <section className="py-10 lg:m-10 relative bg-background rounded-lg ">
      <div className="container relative mx-auto p-4 sm:px-6 lg:px-8 rounded-lg bg-surface shadow-lg">
        {/* Top Metrics */}


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {topMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm text-muted-foreground">{metric.label}</span>
                <span className={`text-xs font-medium ${
                  index === 0 ? 'text-green-500' : index === 1 ? 'text-red-500' : 'text-blue-500'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div className="text-4xl font-bold">{metric.value}</div>
                <div className="flex items-end gap-1 h-12">
                  {metric.bars.map((height, i) => (
                    <div
                      key={i}
                      className={`w-1 ${metric.barColor[i]} rounded-sm`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Total Balance */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-sm text-muted-foreground mb-3">Total Balance</h3>
              <div className="text-4xl font-bold mb-4">$350.0</div>
              <div  className="w-full bg-foreground text-background  px-4 py-2 rounded-lg text-center mb-4">
                Transfer
              </div>
            </div>

            {/* Total Income */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm text-muted-foreground">Total Income</h3>
                <span className="text-xs text-muted-foreground">92%</span>
              </div>
              <div className="text-4xl font-bold">$320.0</div>
            </div>

            {/* Total Expense */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm text-muted-foreground">Total Expense</h3>
                <span className="text-xs text-muted-foreground">92%</span>
              </div>
              <div className="text-4xl font-bold">$220.0</div>
            </div>
          </motion.div>

          {/* Center Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-card border border-border rounded-2xl p-6 w-lg"
          >
                        <SpendOverviewCard data={spendData} />
          </motion.div>

          {/* Right Sidebar - Employee */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card border border-border rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-6">Employee</h3>
            <div className="space-y-6">
              {employeeCategories.map((category, index) => (
                <div key={category.label} className="space-y-3">
                  <span className="text-sm text-foreground">{category.label}</span>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.progressF}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                      className="h-full bg-muted-foreground/40 rounded-full"
                    />
                    
                  </div>
                   <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.progressL}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                      className="h-full bg-muted-foreground/40 rounded-full"
                    />
                    
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
