import os

files = [
    "about.html",
    "contact.html",
    "enterprise.html"
]

target_string = '</i>Services</a></li>'
new_link = """</i>Services</a></li>
                        <li><a href="enterprise.html"
                                class="hover:text-brand-lightBlue transition-colors flex items-center gap-2"><i
                                    class="ph ph-caret-right text-xs"></i>Software Training</a></li>"""

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'Software Training</a></li>' in content:
        print(f"Link already exists in {file_path}")
        continue

    if target_string in content:
        new_content = content.replace(target_string, new_link)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")
    else:
        print(f"Target string not found in {file_path}")
