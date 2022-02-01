---
title: La Décomposition en JavaScript (1)
description: Comment exploiter les possibilités de cette technique pour une plus grande liberté dans votre code. 
date: "2022-02-01"
category: javascript
author:
    id: daniel
    name: Daniel Orchanian
    picture: /images/profile/profile_03_square.jpg
# coverImage:
#     path: /images/blog/covers/christin-hume-Hcfwew744z4-unsplash.jpg
#     authorName: Christin Hume
#     authorUrl: https://unsplash.com/@christinhumephoto
# published: true
---

La technique que nous allons voir aujourd'hui s'appelle l'**affectation par décomposition** (_destructuring_ en anglais).

Elle permet d'**extraire** des données d'un **tableau** ou d'un **objet clé-valeurs** et de les affecter à des **variables**.


## Un exemple concret

Imaginons que vous avez un tableau avec trois valeurs :

```js
const list = ["Alex", 25, "Paris"];
```

Pour passer chacune des valeurs de ce tableau dans des **variables**, vous feriez :

```js
let name = list[0];
let age = list[1];
let city = list[2];
```

C'est assez long à écrire, et si on a plus de trois valeurs, **ça devient rapidement lourd**... Sans compter le fait que si vous changez l'ordre dans le tableau, il faut retoucher les indices dans les crochets :

```js
const list = ["Alex", "M", 25, "designer", "Paris"];
let name = list[0];
let gender = list[1];
let age = list[2];
let job = list[3];
let city = list[4];
```

> C'est moche...

Oui. C'est TRÈS moche.

## Une solution plus simple : la syntaxe de décomposition

Reprenons le tableau du début :

```js
const list = ["Alex", 25, "Paris"];
```

Et utilisons la **décomposition** :

```js
let [name, age, city] = list;

console.log(name, age, city); // => "Alex", 25, "Paris"
```

Non, vous ne rêvez pas : on a bien créé trois variables _name_, _age_ et _city_ à partir de notre tableau, et **en une seule ligne** !

> Mais quelle est cette **sorcellerie** ?!


## Comment marche la décomposition

Oh, rien de sorcier là-dedans. En fait, cette ligne :

```js
let [name, age, city] = list;
```

... revient à faire ceci :

```js
let [name, age, city] = ["Alex", 25, "Paris"];
```

Chaque élément du tableau de gauche (_[name, age, city]_) prend une valeur du tableau de droite (_["Alex", 25, "Paris"]_).

Le tableau de droite est **décomposé** : ses valeurs sont **distribuées à gauche**, dans nos trois variables.

La grande originalité est qu'**on peut utiliser le mot-clé _let_** avant les crochets pour signaler qu'on **crée des variables** !

> Puissant...

Du coup, si vous changez votre tableau, vous pourrez simplement écrire ceci :

```js
const list = ["Alex", "M", 25, "designer", "Paris"];
let [name, gender, age, job, city] = list;
```

Plus pratique, pas vrai ?


## Une syntaxe peut-être familière

Et ça marche aussi avec des **constantes** :

```js
const [name, age, city] = list;
```

> Attends, j'ai déjà vu ce truc quelque part...

En effet, si vous utilisez **React**, et notamment le **hook _useState_**, vous avez déjà utilisé la décomposition :

```js
const [value, setValue] = useState();
```

En gros, _useState_ renvoie **deux éléments** : une valeur et sa fonction de changement, qu'on récupère dans deux variables _value_ et _setValue_. C'est aussi bête que ça.


## La décomposition puissance 10 : les objets

Maintenant que vous avez compris le principe de la décomposition, il est temps de passer aux **objets**.

Modifions un peu notre code pour remplacer notre tableau par un **objet** avec des **clés** et des **valeurs** :

```js
const user = {
    name: "Alex",
    gender: "M",
    age: 12,
    job: "designer",
    city: "Paris",
};
```

On a besoin du nom et de l'âge. On pourrait créer des variables comme suit :

```js
let name = user.name;
let age = user.age;
```

Mais il est possible grâce à la décomposition d'**extraire des variables** pour **chaque clé d'un objet** :

```js
let { name, age } = user;
```

> Mais attends un peu... et les autres clés ?


## Une grande flexibilité

C'est justement là que la décomposition montre sa puissance : avec les objets, **pas besoin de récupérer toutes les clés** ! Vous ne récupérez que ce qui vous intéresse !

On peut même carrément récupérer les valeurs dans l'**ordre voulu** :

```js
let { job, name } = user;

console.log(job); // => "designer"
console.log(name); // => "Alex"
```

> Mais c'est trop bien !

Oui. Par exemple, si vous utilisez des composants **React** avec des classes, vous devez souvent utiliser les variables de `this.state` et `this.props` :

```js
const total = this.state.salary * this.state.bonus - this.props.tax * this.props.multiplier;
```

On peut rendre le code **plus lisible** ainsi :

```js
const { salary, bonus } = this.state;
const { tax, multiplier } = this.props;

// On lit bien mieux ce calcul
const total = salary * bonus - tax * multiplier;
```

> Mais on a rajouté deux lignes...

Certes, mais quelle **amélioration en lisibilité** ! Il est bien plus rapide de parcourir ce code que le précédent. Le **nombre de lignes** ne doit pas devenir une **obsession** !


## Décomposer un objet en argument de fonction

Comment utiliser la décomposition dans une fonction ? Imaginons que vous devez calculer un revenu et les données sont dans un objet _data_ que vous récupérez sur un serveur distant.

```js
function getTotalIncome(data) {
    const total = data.salary + data.bonus;
}
```

Deux problèmes ici :
1. Il faut **bien connaître les clés** de data (_salary_ et _bonus_).
2. S'il **manque une clé** (_bonus_ par exemple), on va avoir un bug.

En appliquant ce qu'on a vu un peu plus haut, on peut faire ceci :

```js
function getTotalIncome(data) {
    const { salary, bonus } = data;
    const total = salary + bonus;
}
```

Eh bien on peut faire mieux :

```js
function getTotalIncome({ salary, bonus }) {
    const total = salary + bonus;
}
```

> On décompose dans l'argument ?!

Et oui ! Et ce n'est pas fini :

```js
function getTotalIncome({ salary, bonus = 0 }) {
    const total = salary + bonus;
}
```

Oui oui : on peut donner une valeur par défaut pour une clé ! Comme des arguments classiques !

Mais avec un avantage notable : **on n'a pas à se soucier de l'odre des clés** (voir plus haut) !

Ces deux appels de fonction sont valables :

```js
getTotalIncome({ salary: 200, bonus: 20 });
getTotalIncome({ bonus: 20, salary: 200 });
```

Ce n'est pas tellement flagrant dans cet exemple, mais il arrive parfois que l'ordre des arguments ne soit VRAIMENT PAS important.

```js
getArticles({ locale: "fr", limit: 10 });
getArticles({ limit: 10, locale: "fr" });
```

La décomposition est alors une façon **flexible** de gérer les données à envoyer aux fonctions.


## Aller plus loin

Voilà voilà. Pour de plus amples (TRÈS amples) détails sur la décomposition, voici un lien vers la page MDN qui en traite : [Affecter par décomposition (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

