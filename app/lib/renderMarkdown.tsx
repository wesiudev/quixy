import Image from "next/image";
import { polishToEnglish } from "../utils/polishToEnglish";
export const parseMarkdown = (input: any) => {
  // Basic Markdown parsing logic
  const lines = input.split("\n");
  let insideList = false;
  const parsedLines = lines.map((line: any) => {
    // Parse image syntax ![alt text](image-url) [link text](link-url)
    const imageMatch = line.match(/!\[([^\]]+)\]\(([^)]+)\)/);
    if (imageMatch) {
      const altText = imageMatch[1];
      const imageUrl = imageMatch[2];
      return `<Image loading="lazy" decoding="async" width=${500} height=${500} className="mx-auto flex flex-col" src=${imageUrl} alt=${polishToEnglish(
        altText
      )} />`;
    }
    // Parse link syntax [link text](link-url)
    const linkMatches = line.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g);
    for (const linkMatch of linkMatches) {
      const linkText = linkMatch[1];
      const linkUrl = linkMatch[2];
      const linkHtml = `<a class="font-bold" href="${linkUrl}">${linkText}</a>`;
      line = line.replace(linkMatch[0], linkHtml);
    }
    // Parse headings
    if (line.startsWith("h1 ")) {
      const text = line.substring(3);
      return `<h1 class="!text-3xl">${text}</h1>`;
    } else if (line.startsWith("h2 ")) {
      const text = line.substring(3);
      return `<h2 class="!text-2xl ">${text}</h2>`;
    } else if (line.startsWith("h3 ")) {
      const text = line.substring(3);
      return `<h3 class="!text-xl ">${text}</h3>`;
    } else if (line.startsWith("h4 ")) {
      const text = line.substring(3);
      return `<h4 class="!text-lg !font-normal">${text}</h4>`;
    } else if (line.startsWith("h5 ")) {
      const text = line.substring(3);
      return `<h5 class="!text-sm !font-normal">${text}</h5>`;
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
