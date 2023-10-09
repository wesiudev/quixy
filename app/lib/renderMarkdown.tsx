export const parseMarkdown = (input: any) => {
  // Basic Markdown parsing logic
  const lines = input.split("\n");
  let insideList = false;
  const parsedLines = lines.map((line: any) => {
    // Parse headings
    if (line.startsWith("# ")) {
      const level = line.lastIndexOf("#") + 1;
      const text = line.substring(level + 1);
      return `<h${level} class="text-3xl">${text}</h${level}>`;
    }
    // Parse image syntax ![alt text](image-url) [link text](link-url)
    const imageMatch = line.match(/!\[([^\]]+)\]\(([^)]+)\)/);
    if (imageMatch) {
      const altText = imageMatch[1];
      const imageUrl = imageMatch[2];
      return `<img class="mx-auto max-w-full flex flex-col" src="${imageUrl}" alt="${altText}" /><a class="opacity-50" href="${imageUrl}">Źródło: ${altText}</a>`;
    }
    // Parse link syntax [link text](link-url)
    const linkMatches = line.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g);
    for (const linkMatch of linkMatches) {
      const linkText = linkMatch[1];
      const linkUrl = linkMatch[2];
      const linkHtml = `<a class="font-bold" href="${linkUrl}">${linkText}</a>`;
      line = line.replace(linkMatch[0], linkHtml);
    }

    // Parse ordered lists
    const listMatch = line.match(/^(\d+\.)\s(.+)/);
    if (listMatch) {
      if (!insideList) {
        insideList = true;
        return `<ol><li>${listMatch[2]}</li>`;
      }
      return `<li>${listMatch[2]}</li>`;
    } else {
      // End the ordered list if it was previously started
      if (insideList) {
        insideList = false;
        return `</ol>${line}`;
      }
    }

    // Parse paragraphs
    return `<p>${line}</p>`;
  });

  // Close the ordered list if it was opened but not closed
  if (insideList) {
    parsedLines.push("</ol>");
  }

  return parsedLines.join("\n");
};

// [Quixy](https://quixy.pl) nie jest jedynie firmą tworzącą strony internetowe; to prawdziwy architekt wirtualnych przestrzeni, gdzie projektowanie stron przekształca się w sztukę. Nasze misternie zaprojektowane interfejsy użytkownika są owocem pasji i precyzji, gdzie każdy element jest starannie przemyślany, od [doboru kolorów](https://quixy.pl/blog/dlaczego-kolor-ma-znaczenie-psychologia-barw-w-projektowaniu) po układ, aby zapewnić Twojej stronie nie tylko unikalność, ale także niepowtarzalną elegancję. Tutaj nie chodzi jedynie o estetykę; to ożywienie Twojej wizji, zamienionej w wirtualną rzeczywistość. Z nami Twoja strona staje się opowieścią, przyciągającą spojrzenia i zachwycającą zmysły odwiedzających. Pozwól swojej stronie zaświecić jak nigdy dotąd - to możliwe dzięki Quixy. Zapraszamy Cię do naszego bloga, gdzie znajdziesz inspirujące artykuły dotyczące doboru kolorów, jak również wiele innych fascynujących tematów:
