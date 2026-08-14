const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '..', 'src', 'pages');

// List of target files: ServicesPage.jsx + 36 service location files
const files = fs.readdirSync(pagesDir).filter(file => {
  if (file === 'ServicesPage.jsx') return true;
  const prefixes = ['HairStyling', 'HairExtension', 'Makeup', 'SkinCare'];
  return prefixes.some(prefix => file.startsWith(prefix));
});

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace <Footer /> with <Footer hideCourses={true} />
  if (content.includes('<Footer />')) {
    content = content.replace('<Footer />', '<Footer hideCourses={true} />');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated Footer in ${file}`);
  } else {
    console.log(`Footer already updated or not found in ${file}`);
  }
});
