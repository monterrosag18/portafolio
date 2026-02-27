import re

with open('C:/Users/USER/Downloads/trabajos sql y nosql/portafolio/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract SQL & NoSQL section
sql_start = html.find('<div class="row mt-5">\n          <div class="col-12">\n            <h3 class="text-center mb-4" style="color: #00758F; font-size: 1.8rem;">\n              <i class="fas fa-database"></i> SQL & NoSQL')
sql_end = html.find('</section>') # end of projects section

if sql_start != -1 and sql_end != -1:
    # Grab the whole block
    sql_block = html[sql_start:sql_end]
    html = html[:sql_start] + html[sql_end:]

    # Insert it right before JavaScript section
    js_start = html.find('<div class="row mb-5">\n          <div class="col-12">\n            <h3 class="text-center mb-4" style="color: #f0db4f; font-size: 1.8rem;">\n              <i class="fab fa-js-square"></i> JavaScript')
    if js_start != -1:
        # Give SQL section a mb-5 and JS an mt-5
        sql_block_mod = sql_block.replace('<div class="row mt-5">', '<div class="row mb-5">', 1)
        html = html[:js_start] + sql_block_mod + '\n\n        ' + html[js_start:]
        html = html.replace('<h3 class="text-center mb-4" style="color: #f0db4f; font-size: 1.8rem;">\n              <i class="fab fa-js-square"></i> JavaScript', '<h3 class="text-center mb-4 mt-5" style="color: #f0db4f; font-size: 1.8rem;">\n              <i class="fab fa-js-square"></i> JavaScript')

# Standardize column classes to col-lg-4 col-md-6 mb-4
html = html.replace('class="col-lg-3 col-md-6"', 'class="col-lg-4 col-md-6 mb-4"')
html = html.replace('class="col-lg-6"', 'class="col-lg-4 col-md-6 mb-4"')
html = html.replace('class="col-lg-4 col-md-6"', 'class="col-lg-4 col-md-6 mb-4"')
html = html.replace('class="col-lg-4 col-md-6 mb-4 mb-4"', 'class="col-lg-4 col-md-6 mb-4"')

# Also change the special col-12 for the portfolio card to also match
html = html.replace('<div class="col-12">\n            <div class="project-card h-100" style="background: rgba(217, 119, 6, 0.05); border-color: rgba(217, 119, 6, 0.3);">', '<div class="col-lg-4 col-md-6 mb-4">\n            <div class="project-card h-100" style="background: rgba(217, 119, 6, 0.05); border-color: rgba(217, 119, 6, 0.3);">')

with open('C:/Users/USER/Downloads/trabajos sql y nosql/portafolio/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print('HTML layout refactored successfully!')
