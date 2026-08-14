const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '..', 'src', 'pages');
const prefixes = ['HairStyling', 'HairExtension', 'Makeup', 'SkinCare'];

fs.readdirSync(pagesDir).forEach(file => {
  const isTarget = prefixes.some(prefix => file.startsWith(prefix));
  if (!isTarget) return;

  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace imports
  const oldImport = "import TrainingPrograms from \"../components/TrainingPrograms\";";
  const newImports = [
    "import About from \"../components/About\";",
    "import Services from \"../components/Services\";",
    "import Clients from \"../components/Clients\";",
    "import Team from \"../components/Team\";",
    "import Testimonials from \"../components/Testimonials\";",
    "import FAQ from \"../components/FAQ\";",
    "import Contact from \"../components/Contact\";"
  ].join("\n");

  if (content.includes(oldImport)) {
    content = content.replace(oldImport, newImports);
  }

  // Replace JSX structure
  const oldJSXRegex = /<LocationHero\s+h1Text="([^"]+)"\s*\/>\s*<TrainingPrograms\s*\/>/g;
  const newJSX = `<LocationHero h1Text="$1" />
      <About 
        title="Our Services"
        subtitle="Professional Beauty Services Designed for You"
        desc="At Blend & Bloom Salon Academy, we offer professional beauty services delivered with expert techniques and personalized care. From hair styling and makeup artistry to skincare and beauty treatments, our services are designed to enhance your look, confidence, and overall experience."
        exploreHref="#services"
        exploreOnClick={(e) => {
          e.preventDefault();
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', '/services');
        }}
      />
      <Services />
      <Clients />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />`;

  if (oldJSXRegex.test(content)) {
    content = content.replace(oldJSXRegex, newJSX);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`Skipped or already updated: ${file}`);
  }
});
