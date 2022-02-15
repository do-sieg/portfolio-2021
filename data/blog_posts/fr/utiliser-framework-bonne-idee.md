---
title: Quand utiliser un framework frontend (ou pas) ?
description: "..."
date: "2022-02-15"
category: javascript
author:
    id: daniel
    name: Daniel Orchanian
    picture: /images/profile/profile_03_square.jpg
# coverImage:
#     path: /images/blog/covers/fr/cinq-problemes-recrutement-v2.jpg
#     authorName: Eric Prouzet
#     authorUrl: https://unsplash.com/@eprouzet
# translations:
#     en: five-issues-recruiting
published: false
---

Le monde de JavaScript **pullule de frameworks** (ça mérite un article dédié).

> Précision : j'utilise le terme framework par abus de langage pour aussi englober les bibliothèques.

Si vous voulez progresser en développement **frontend**, vous vous spécialiserez probablement dans des frameworks dédiés comme **_React_**, **_Angular_** ou **_Vue_**.

> Ou **Svelte**.

Le souci, c'est que souvent, on se retrouve à vouloir utiliser notre framework de prédilection **pour tous nos projets**.

Et ce n'est **pas toujours nécessaire**.


## Pourquoi un framework frontend ?

Pour bien comprendre s'il est opportun d'utiliser un framework front-end dans un projet, il faut d'abord bien comprendre **à quoi servent** ces frameworks.

Beaucoup de fonctionnalités pour lesquelles on aime utiliser _React_, _Angular_ ou _Vue_...

> Ou Svelte.

... existent en JavaScript **natif**.

- Reproduire un bout de code HTML sur plusieurs pages.

- Recevoir des données d'un serveur distant, ou lui en envoyer.

- Modifier le contenu d'une page.

- Capter les interactions utilisateur (clic, entrée clavier).

- Gérer et envoyer un formulaire.

Vous **n'avez pas besoin de framework** pour toutes ces choses.

> On nous aurait menti ?!

C'est un peu plus compliqué que ça...

Maintenant que vous avez cette information, voyons à quoi servent **vraiment** les frameworks.


## Réutiliser des éléments d'interface

Une interface **complexe** aura un certain degré d'**uniformité**. Ce qui conduira à une **répétition**, donc **réutilisation**, de ses éléments.

> Par exemple, sur un réseau social, on affichera les informations d'un utilisateur sous forme d'une photo de profil et de son nom avec un lien vers sa page de profil. 
> Et cet élément d'interface va se retrouver **un peu partout sur le site**.

Dans un système HTML/CSS/JavaScript natif, il faudra au choix :
- **Copier/coller** du code HTML et le modifier avec JavaScript
- **Générer le code** par une fonction JavaScript, et passer par un processus à **plusieurs étapes** pour l'insérer dans la page (voir plus bas).

Un des points forts des frameworks frontend est leur système de **composants**.

Ils permettent de **réutiliser des éléments d'interface** à travers toute une application.

L'insertion du composant se fait naturellement, souvent en **une seule ligne**, dans du code HTML (ou apparenté, comme JSX).

```jsx
<div>
    <h1>Titre</h1>
    <p>Bla bla bla</p>
    <MonComposant />
</div>
```


## Isoler la logique propre aux composants

Le composant n'est pas seulement **graphique**. On peut aussi y inclure sa **logique fonctionnelle propre**. 

Le JavaScript natif nécessite de **"se greffer" sur le DOM**, en ajoutant des **écouteurs d'événements** (clic sur un bouton, remplissage d'un champ de texte...).

> Oui, ça prend des plombes à coder...

Un framework frontend va générer le code HTML avec **ses événements embarqués**.

```jsx
<>
    <MonBouton onClick={console.log("Coucou !")} />
    <MonInput value={name} onChange={e => setName(e.target.value)} />
</>
```

Plus besoin de scanner le contenu d'un élément HTML ou de repérer une interaction utilisateur : le code HTML généré par le framework est déjà couplé avec des **variables** et des **fonctions**.


## Ne plus avoir à changer manuellement le DOM

JavaScript permet de modifier du contenu dynamiquement, de façon **native**.

Il est tout à fait possible par exemple de récupèrer des données envoyées par un serveur, comme une liste d'utilisateurs, et de modifier le contenu de la page pour afficher chaque utilisateur.

Cependant, ce procédé est **long** et **fastidieux** à mettre en place en natif.
- **Génération du code** pour afficher un utilisateur.
- **Repérage de l'élément** où on va afficher les utilisateurs.
- **Insertion du code** dans cet élément.

Ajoutons à cela :
- un **vidage** de l'élément contenant la liste quand on va la mettre à jour
- le fait de devoir sans arrêt **jongler entre le code HTML et le script JavaScript** pour coupler correctement les choses
- les **créations d'éléments** et insertions comme des poupées russes
- ou encore **les joies de la génération de code** sous forme de chaîne de caractères...

Et dans une application qui **grandit**, réinventer la roue pour des opérations aussi **courantes** (afficher des listes, gérer des formulaires) est une pure **perte de temps**.

Un framework va **gérer lui-même toutes ces étapes**. Il suffit juste de **coupler un élément et vos données**.

Le framework se charge de mettre à jour le contenu de la page **automatiquement** selon les règles d'affichage définies.

On peut alors simplement **se concentrer sur la gestion des données** au lieu de jouer avec le DOM.

Le framework permet donc de **travailler plus vite** quand les tâches sont **répétitives**.


## Une gestion optimale des mises à jour du DOM

Un autre point en faveur des frameworks : ils gèrent les changements de façon à n'effectuer les mises à jour du DOM que **si c'est nécessaire**.

Alors qu'en JavaScript natif, notre liste d'utilisateurs serait vidée à chaque requête vers le serveur, avant d'être **remplie intégralement de nouveau**...

Et ce même si les informations affichées **n'ont pas changé**.

Les opérations sur le DOM sont **coûteuses**. Les déclencher uniquement quand nécessaire est un gain en **performance**.


## Un code modulaire, plus facile à maintenir

Oui, il est tout à fait possible de créer la partie client d'un site avec de simples fichiers _.html_, _.css_ et _.js_.

Mais plus le projet va grandir, et plus on aura des difficultés à **maintenir un code cohérent**.

Les fichiers se multiplient, et on se retrouve à **jongler entre plusieurs fichiers** pour gérer un simple élément d'interface.

Un framework permet de **mieux organiser son code**, grâce à son approche **modulaire** à base de composants.

Par approche modulaire, on entend que chaque partie d'une application opère **indépendamment** des autres, contient **sa propre logique**, et ne fait que communiquer avec le reste.

L'avantage d'une telle approche est qu'on peut travailler à plusieurs sur différentes parties d'une application, sans forcément empiéter sur le travail des autres.


## Une même structure pour tous

Utiliser JavaScript en natif donne une grande **liberté** aux développeurs, mais ces derniers vont produire **des code très différents**.

Et si jamais on travaille à plusieurs, on se retrouve à perdre 20 minutes à expliquer **comment est organisé le code** au lieu de se concentrer sur les fonctionnalités.

Les frameworks imposent une certaine **structure**. Ils ont chacun un ensemble de **règles** à suivre.

> Par exemple, _VueJS_ impose le découpage des composants en trois parties : template (HTML), script (JavaScript), et style (CSS).

Ces règles permettent aux developpeurs travaillant sur un même framework de **parler la même langue**.


## Récapitulatif des avantages d'un framework

Revoyons les problèmes que les frameworks aident à résoudre :

- Maintenabilité : il est plus facile d'apporter des modifications rapides à une application découpée en composants réutilisables et autonomes sans impacter le reste de l'application.

- Aller à l'essentiel : afficher des données et gérer les interactions.

- Vitesse : les bases sont déjà posées, et le code est raccourci. Les composants sont faciles à gérer et modifier.

- Collaboration : le framework et sa structure sont familiers pour d'autres développeurs qui se joindraient au projet.


Tous les problèmes que les frameworks viennent résoudre peuvent être réglés avec le JavaScript natif.

Mais le temps perdu à mettre en place ce qu'un framework a déjà mis en place est à prendre en compte.

On peut tondre sa pelouse avec des ciseaux, mais est-ce une solution ?


---


Disadvantages and alternatives
Of course, like any tool, a front-end framework isn’t always the right solution for your application. Here are a few factors to consider before implementing one.

Disadvantages
Abstracted, overhead code: Until you’re thoroughly familiar with it, framework code is a black box. It can be hard to discern how much of the code is helpful to your application and frustrating to fix bugs resulting from code you’re not familiar with.
Learning curve: Learning to use a framework effectively takes time. To be productive, you need to understand the syntax, tooling, and philosophy behind how a framework functions. For projects where speed is essential, learning a brand new technology might not be the best use of your time.
Overkill for smaller projects: If you’re looking to deploy a static site or a site where every component is unique, you might not need the power and overhead of a full-fledged framework. It might still be helpful to implement a minimal framework or even library—we’ll discuss these in the next section.
Setup: Setting up and customizing a framework to your specific use case takes time. If speed is essential, go with what you know, or what your development team is comfortable with.
Strong opinions: An opinionated framework may feel constricting, and its design principles may clash with yours. Make sure you research the specific framework you’re implementing. If you prefer to build from scratch, go with your own solution.
Ecosystem evolution: The JavaScript framework ecosystem is famously volatile. The hottest framework of today may not be popular next year, and with this shift, developers and support may be hard to find.
Alternatives
There are a few alternatives to large JavaScript frameworks like Vue, React, and Angular. As we mentioned earlier, different front-end frameworks attempt to solve different problems. Depending on your needs,  smaller frameworks and libraries may work for you. Additionally, you could abandon separation of concerns and go with a monolith full-stack app with server-side rendered views. Here are a few alternatives to consider:

Templating engines: If all you need are reusable components, consider a templating engine like Handlebars.js, EJS, Underscore.js, or mustache. These engines allow you to store HTML/CSS/JavaScript components and insert JavaScript variables into them. I mentioned struggling with how to scale my project, Hackterms, at the start of this article. In retrospect, I  absolutely should have used a full-fledged framework. However, at the time, I was short on time and patience, so I successfully used Handlebars to create reusable templates.

CSS frameworks and libraries: If you’re looking to create a consistent UI, a tool like Bootstrap, SemanticUI, Bulma, or Tailwind might be a good option. Someone once described using a CSS framework as “having a designer looking over your shoulder, nudging you towards good practices.” You don’t have to inherit the visual design of these frameworks, but for a developer without a strong design background, it can be really helpful to know how many fonts to use, what different button states are, and what intuitive forms look like.

Full-stack monolith apps: Many full-stack frameworks, like Ruby on Rails, Meteor.js, and Django, come with their own templating engines, which render HTML on the server. Server-side rendering and monolith architecture are both concepts that deserve their own blog posts, but you can think of this option as picking one full-stack framework for your entire application and writing the presentation layer and server logic within a single codebase. Most full-stack frameworks do allow you to plug in front-end frameworks of your choice, but default you to using their own templating engines. This is a good solution if you want to double down on using a single framework for your entire app; it can also be a quick way to prototype a full-stack application.

In conclusion
Front-end frameworks are a powerful tool for developing complex user interfaces. They encourage you to build out a maintainable, modular, standalone architecture that makes it easy to build your application and collaborate with other developers. Popular frameworks are backed by supportive communities, a wealth of documentation and tutorials, and offer battle-tested code that tackles common challenges that front ends pose as they scale. Frameworks allow you to tap into the most modern JavaScript features and offer tooling that makes it easy to prototype apps. Finally, they empower you with a shared language to discuss your architecture and challenges.


Front-end frameworks and libraries come in many shapes and sizes—you can use a full-fledged UI framework to build out your entire front end, implement a CSS library to tighten your visual design, or use a templating engine to create reusable components.

However, a front-end framework can be overkill for smaller projects and prototypes, and the steep learning curve, coupled with the quickly evolving JavaScript ecosystem, can make it difficult to implement in a young project. At the end of the day, you should implement a popular framework if you’re excited to learn about well-tested design principles, expect your front end to scale, or need to prototype quickly when performance isn’t a major concern. If you like thoroughly understanding every part of your application, or don’t want to learn a new technology, then it’s probably not the best option.

Hopefully, this overview has given you an idea of the problems a front-end framework solves, and whether it’s the right fit for your next project. What has your experience with front-end frameworks been like? Which is your framework of choice? Looking forward to your comments below!


