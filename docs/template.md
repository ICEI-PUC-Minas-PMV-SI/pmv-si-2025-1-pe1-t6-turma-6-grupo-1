# Template padrão do site

O layout padrão do site será feito em HTML e CSS.

--> Cores RGB: #E23437, #B83333, #FA9393, #FFFFFF, #000000

--> Font-Family: Verdana

--> Font-size: 27px, 32px, 40px, 48px

## Paleta de cores

![Image](https://github.com/user-attachments/assets/09491c9c-aa50-497e-8ed6-5c3bdbf5b119)

## Tipografia

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
</head>
  <style>
    
  body {
  font-family: Verdana, sans-serif;
  padding: 20px;
}

.font-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.font-container span {
  padding: 10px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  display: inline-block;
}

.regular {
  font-weight: normal;
}

.italic {
  font-style: italic;
}

.light {
  font-weight: 300;
}

.medium {
  font-weight: 500;
}

.semibold {
  font-weight: 600;
}

.bold {
  font-weight: bold;
}

.black {
  font-weight: 900;
}
  </style>
<body>
  <div class="font-container">
    <span class="verdana regular">Verdana Regular</span>
    <span class="verdana italic">Verdana Italic</span>
    <span class="verdana light">Verdana Light</span>
    <span class="verdana light italic">Verdana Light Italic</span>
    <span class="verdana medium">Verdana Medium</span>
    <span class="verdana medium italic">Verdana Medium Italic</span>
    <span class="verdana semibold">Verdana SemiBold</span>
    <span class="verdana semibold italic">Verdana SemiBold Italic</span>
    <span class="verdana bold">Verdana Bold</span>
    <span class="verdana bold italic">Verdana Bold Italic</span>
    <span class="verdana black">Verdana Black</span>
    <span class="verdana black italic">Verdana Black Italic</span>
  </div>
</body>
</html>

## Iconografia

Defina os ícones que serão utilizados e suas respectivas funções.

Apresente os estilos CSS criados para cada um dos elementos apresentados.
Outras seções podem ser adicionadas neste documento para apresentar padrões de componentes, de menus, etc.


> **Links Úteis**:
>
> -  [Como criar um guia de estilo de design da Web](https://edrodrigues.com.br/blog/como-criar-um-guia-de-estilo-de-design-da-web/#)
> - [CSS Website Layout (W3Schools)](https://www.w3schools.com/css/css_website_layout.asp)
> - [Website Page Layouts](http://www.cellbiol.com/bioinformatics_web_development/chapter-3-your-first-web-page-learning-html-and-css/website-page-layouts/)
> - [Perfect Liquid Layout](https://matthewjamestaylor.com/perfect-liquid-layouts)
> - [How and Why Icons Improve Your Web Design](https://usabilla.com/blog/how-and-why-icons-improve-you-web-design/)
