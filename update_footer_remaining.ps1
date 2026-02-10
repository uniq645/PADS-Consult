$files = @(
    "about.html",
    "contact.html",
    "enterprise.html"
)

foreach ($file in $files) {
    if (-Not (Test-Path "$file")) { continue }
    $content = Get-Content $file -Raw

    $href = "enterprise.html"
    
    # Check if link already exists
    if ($content -match "href=`"$href`".*?>Software Training</a>") {
        Write-Host "Link already exists in $file"
        continue
    }

    $newItem = "                        <li><a href=`"$href`" class=`"hover:text-brand-lightBlue transition-colors flex items-center gap-2`"><i class=`"ph ph-caret-right text-xs`"></i>Software Training</a></li>`n"

    # Match Quick Links header and the following UL block
    # We look for "Quick Links" then text until "</ul>"
    # Regex explanation:
    # "Quick Links" followed by any characters (non-greedy) until we see </ul>
    # We capture the part before </ul>, and append the new item before the closing </ul>
    
    if ($content -match '(?s)(Quick Links.+?<ul.+?)(\s*</ul>)') {
        $content = $content -replace '(?s)(Quick Links.+?<ul.+?)(\s*</ul>)', ('$1' + "$newItem" + '$2')
        Set-Content -Path $file -Value $content -Encoding UTF8
        Write-Host "Updated $file"
    }
    else {
        Write-Warning "Could not find Quick Links block in $file"
    }
}
