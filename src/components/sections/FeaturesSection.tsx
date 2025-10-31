import { motion } from "framer-motion";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { MoreVertical, MoveUp } from "lucide-react";
import { Button } from "../ui/button";
import team1 from "../../assets/images/team(1).png";
import team2 from "../../assets/images/team(2).png";
import team3 from "../../assets/images/team(3).png";
import team4 from "../../assets/images/team(4).png";
import team5 from "../../assets/images/team(5).png";
import vector from "../../assets/images/Vector.png";
import CountUp from "react-countup";

const simpleAnalyticsData = [
  { value: 8 }, { value: 22 }, { value: 15 },
  { value: 38 }, { value: 26 }, { value: 44 },
  { value: 62 }, { value: 55 }, { value: 78 },
  { value: 70 }, { value: 88 }, { value: 98 },
];

const team = [team1, team2, team3, team4, team5];
const boostingBusinessData = [
  { blue: 60, gray: 10 }, { blue: 80, gray: 45 },
  { blue: 65, gray: 25 }, { blue: 95, gray: 50 },
  { blue: 95, gray: 60 }, { blue: 100, gray: 25 },
  { blue: 70, gray: 35 }, { blue: 95, gray: 10 },
  { blue: 80, gray: 50 }, { blue: 60, gray: 10 },
];

const invoices = [
  { name: "John Client_download.Pdf", color: "#FBADE0" },
  { name: "Michele Leos_download.Pdf", color: "#6893FF" },
  { name: "John Smith_download.Pdf", color: "#DFFF9D" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10 sm:space-y-16"
        >
          {/* ----------- Top Row ----------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Simple analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-3xl p-6 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2">Simple analytics</h3>
              <p className="text-sm text-muted-foreground mb-6 sm:mb-8">
                Make informed decisions backed by data through our analytics tools.
              </p>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500">
                  <MoveUp className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-emerald-500">14.12%</span>
              </div>

              <div className="h-32 sm:h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={simpleAnalyticsData}>
                    <Line type="natural" dataKey="value" stroke="#10b981" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Boosting Business */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-3xl p-6 sm:p-8"
            >
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                  Boosting Business.
                  <br /> Today and Tomorrow.
                </h2>
                <p className="text-sm text-muted-foreground">
                  Bring harmony to team expenses with budget limits and real-time monitoring.
                </p>
              </div>

              <div className="h-32 sm:h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={boostingBusinessData}>
                    <Line type="linear" dataKey="gray" stroke="#4b5563" strokeWidth={2} dot={false} strokeDasharray="5 5" opacity={0.5} />
                    <Line type="linear" dataKey="blue" stroke="#3b82f6" strokeWidth={2.5} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Easy collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Easy collaboration</h3>
                <p className="text-sm text-muted-foreground mb-8 sm:mb-12">
                  Seamlessly collaborate with your team members like never before.
                </p>
              </div>

              <div className="relative flex justify-center items-center h-48 sm:h-64">
                <div className="absolute w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-[#ffffff0d] border border-[#ffffff0d]" />
                <div className="absolute w-44 h-44 sm:w-64 sm:h-64 rounded-full border border-[#ffffff0a]" />

                <div className="flex justify-center -space-x-4 sm:-space-x-5 relative z-10">
                  {team.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`team-member-${index + 1}`}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#FFFFFF1A] object-cover"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ----------- Bottom Row ----------- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Real-time accounting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-card border border-border rounded-3xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Real-time accounting at your fingertips.
              </h3>
              <p className="text-sm text-muted-foreground mb-8 sm:mb-10">
                Take the pain out of book keeping! Wave goodbye to mountains of paperwork and endless email reminders.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
                <div className="bg-muted p-4 rounded-xl flex-1">
                  <div className="text-3xl sm:text-5xl font-bold mb-8">
                    $<CountUp end={3453.0} duration={2} separator="," decimals={2} />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-secondary rounded-full w-3/4" />
                    <div className="h-2 bg-secondary rounded-full w-3/4" />
                    <div className="h-2 bg-secondary rounded-full w-1/2" />
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="text-sm font-semibold text-center mb-4">Monthly Invoice</div>
                  <div className="space-y-3">
                    {invoices.map((invoice, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl bg-muted/30"
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: invoice.color }}
                        >
                          <img src={vector} alt={invoice.name} className="w-4 h-4 object-contain" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm">{invoice.name}</span>
                          <div className="h-2 bg-secondary rounded-full w-3/4 mt-1" />
                        </div>
                        <button className="text-muted-foreground hover:text-foreground">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Expense management */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-card border border-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight mb-6">
                Optimise expense management as a team
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg lg:text-[22px] mb-8 leading-relaxed">
                Bring harmony to team expenses with budget limits and real-time monitoring.
              </p>
              <Button
                size="lg"
                className="w-full sm:w-fit px-8 bg-background hover:bg-muted text-foreground border border-border rounded-full"
              >
                Explore more
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
