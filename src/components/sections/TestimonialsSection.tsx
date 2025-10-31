import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import pic1 from "../../assets/images/pic (1).png";
import pic2 from "../../assets/images/pic (2).png";
import pic3 from "../../assets/images/pic (3).png";
import comma from '../../assets/images/inverted comma.png'
const testimonials = [
  {
    id: 1,
    name: "Alfredo Lubin",
    role: "CEO at TechCorp",
    feedback:
      "I really like the system at this management. I have recommending this software to you guys.",
    rating: 5,
    img: pic1,
  },
  {
    id: 2,
    name: "Randy Levin",
    role: "Financial Director",
    feedback:
      "We align our success with the success of our customers which is why we offering expensive stuff.",
    rating: 5,
    img: pic2,
  },
  {
    id: 3,
    name: "Angel Rhigo",
    role: "Product Manager",
    feedback:
      "I wish like the system at this management. I have recommending this software to you guys.",
    rating: 5,
    img: pic3,
  },
];

export function TestimonialsSection() {
  const scrollRef = useRef(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-dynamicBorder text-sm font-medium mb-4">
          <MessageSquare />
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What are people saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Thank you for your testimonial. Our clients are incredibly special
            to us and one comment or a great review can easily brighten our day
            and make all our efforts feel so well!
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative lg:ml-[13.5rem] ">
          <div
            ref={scrollRef}
            className="flex justify-start gap-6 overflow-x-auto flex-nowrap pl-4 hide-scrollbar scroll-smooth"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-card transition-all duration-300 w-[660px] flex-shrink-0"
              >
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.feedback}"
                </p>

              <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#FFC250] text-[#FFC250]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div>
<img
  src={comma}
  alt="quote"
  className="w-[67.5px] h-[48px] opacity-100 top-[219px] left-[741px] "
/>
                </div>
              </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-3 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              onClick={scrollNext}
              className="rounded-full bg-primary"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
