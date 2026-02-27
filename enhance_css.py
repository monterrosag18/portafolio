with open('C:/Users/USER/Downloads/trabajos sql y nosql/portafolio/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Add a unique hover effect and professional styling to the cards
old_css_hover = '''.project-card:hover, .skill-card:hover {
  transform: translateY(-12px);
  background: rgba(30, 64, 175, 0.1);
  border-color: rgba(30, 64, 175, 0.4);
}'''

new_css_hover = '''.project-card, .skill-card {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.project-card::before, .skill-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--accent), var(--secondary));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.project-card:hover::before, .skill-card:hover::before {
  opacity: 1;
}

.project-card:hover, .skill-card:hover {
  transform: translateY(-8px) scale(1.02);
  background: rgba(30, 64, 175, 0.15);
  border-color: var(--accent);
  box-shadow: 0 15px 35px rgba(14, 165, 233, 0.15), 0 0 15px rgba(30, 64, 175, 0.2) inset;
}'''

if old_css_hover in css:
    css = css.replace(old_css_hover, new_css_hover)

# Also enhance the hero section background to be slightly more dynamic
old_hero = 'background: radial-gradient(ellipse at 50% 0%, rgba(30, 64, 175, 0.15) 0%, transparent 60%);'
new_hero = 'background: linear-gradient(135deg, rgba(30, 64, 175, 0.2) 0%, transparent 40%), radial-gradient(ellipse at 80% 20%, rgba(14, 165, 233, 0.15) 0%, transparent 50%);'
css = css.replace(old_hero, new_hero)

with open('C:/Users/USER/Downloads/trabajos sql y nosql/portafolio/styles.css', 'w', encoding='utf-8') as f:
    f.write(css)
print('Styles enhanced successfully!')
