Полезный сайт для школьников. Сделал как школьный проект.
Чтобы доказать равенство, мы покажем, что обе стороны содержат одни и те же элементы.

#### Шаг 1: Докажем, что ((A \cup B) \setminus C \subseteq (A \setminus C) \cup (B \setminus C)).

Пусть (x \in (A \cup B) \setminus C).
Это означает, что (x \in (A \cup B)) и (x \notin C).
Следовательно, (x) либо принадлежит (A), либо принадлежит (B).

Теперь рассмотрим два случая:
Случай 1: (x \in A).
Поскольку (x \notin C), это значит, что (x \in A \setminus C).
Случай 2: (x \in B).
Поскольку (x \notin C), это значит, что (x \in B \setminus C).

В обоих случаях, мы имеем, что (x \in (A \setminus C) \cup (B \setminus C)).
Итак, мы доказали, что:
[
(A \cup B) \setminus C \subseteq (A \setminus C) \cup (B \setminus C).
]

#### Шаг 2: Докажем, что ((A \setminus C) \cup (B \setminus C) \subseteq (A \cup B) \setminus C).

Теперь пусть (x \in (A \setminus C) \cup (B \setminus C).
Это означает, что либо (x \in A \setminus C), либо (x \in B \setminus C).

Рассмотрим два случая:
Случай 1: (x \in A \setminus C).
Это значит, что (x \in A) и (x \notin C). Следовательно, (x \in (A \cup B)) и (x \notin C), что означает, что (x \in (A \cup B) \setminus C).
Случай 2: (x \in B \setminus C).
Это значит, что (x \in B) и (x \notin C). Следовательно, (x \in (A \cup B)) и (x \notin C), что также означает, что (x \in (A \cup B) \setminus C).

Итак, мы доказали, что:
[
(A \setminus C) \cup (B \setminus C) \subseteq (A \cup B) \setminus C.
]
