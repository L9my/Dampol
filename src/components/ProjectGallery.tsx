import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Base path for GitHub Pages deployment
const BASE_PATH = '/Dampol/';

const projects = [
  {
    id: 1,
    title: 'Garden Office Pod',
    category: 'Commercial',
    image: `${BASE_PATH}assets/hero-bg.png`,
  },
  {
    id: 2,
    title: 'Modern Modular Extension',
    category: 'Residential',
    image: `${BASE_PATH}assets/exterior-variant.png`,
  },
  {
    id: 3,
    title: 'Premium Cladding Detail',
    category: 'Engineering',
    image: `${BASE_PATH}assets/detail.png`,
  },
  {
    id: 4,
    title: 'Executive Interior',
    category: 'Interior',
    image: `${BASE_PATH}assets/interior.png`,
  },
];

export default function ProjectGallery() {
  return (
    <section className="py-24 bg-dark-800" id="projects">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl text-white uppercase font-light">
              Selected <span className="font-bold">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-bronze-500 mt-6"></div>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-white hover:text-bronze-500 transition-colors uppercase tracking-widest text-sm font-bold">
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden aspect-[4/3] md:aspect-[16/9]"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-bronze-500 uppercase tracking-widest text-xs font-bold mb-2 block">
                    {project.category}
                  </span>
                  <div className="flex justify-between items-end border-t border-white/30 pt-4">
                    <h3 className="text-2xl text-white font-bold">{project.title}</h3>
                    <ArrowUpRight className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
