const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '..', 'src', 'pages');

const files = fs.readdirSync(pagesDir).filter(file => {
  if (file === 'ServicesPage.jsx') return true;
  const prefixes = ['HairStyling', 'HairExtension', 'Makeup', 'SkinCare'];
  return prefixes.some(prefix => file.startsWith(prefix));
});

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (file === 'ServicesPage.jsx') {
    // Replace <Hero /> with <Hero hideCourses={true} />
    if (content.includes('<Hero />')) {
      content = content.replace('<Hero />', '<Hero hideCourses={true} />');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated Hero in ${file}`);
    }
  } else {
    // Replace <LocationHero h1Text="..." /> with <LocationHero h1Text="..." hideCourses={true} />
    const heroRegex = /<LocationHero\s+h1Text="([^"]+)"\s*\/>/;
    if (heroRegex.test(content)) {
      content = content.replace(heroRegex, '<LocationHero h1Text="$1" hideCourses={true} />');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated LocationHero in ${file}`);
    }
  }
});
