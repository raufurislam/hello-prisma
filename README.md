# Hello Prisma

This repository demonstrates **Prisma ORM CRUD operations** with PostgreSQL using TypeScript.  
Here is a structured reference of all the main Prisma queries.

---

## **1. Create**

```ts
const user = await prisma.user.create({
  data: {
    name: "Jhankar Mahbub",
    email: "jkr@ph.com",
    profilePhoto: "https://programing-hero.com/level2/jkr.png",
  },
});
```

Inserts a single user into the database and returns the created object.

---

## **2. Create Many**

```ts
const users = await prisma.user.createMany({
  data: [
    { name: "Mir", email: "mir@ph.com" },
    { name: "Tanmoy", email: "tanmoy@ph.com" },
    { name: "Mizan", email: "mizan@ph.com" },
    { name: "Imun", email: "imun@ph.com" },
  ],
});
```

Inserts multiple users at once. Returns a count of inserted rows.

---

## **3. Find Many**

```ts
const users = await prisma.user.findMany({
  where: { email: { contains: "ph.com", mode: "insensitive" } },
  orderBy: { name: "asc" },
});
```

Retrieves multiple users as an array. Supports filtering, ordering, and case-insensitive search.

---

## **4. Find Unique**

```ts
const user = await prisma.user.findUnique({
  where: { id: 1 },
});
```

Retrieves a single user by a unique field (e.g., `id` or `email`). Returns `null` if not found.

---

## **5. Find Unique Or Throw**

```ts
const user = await prisma.user.findUniqueOrThrow({
  where: { id: 6 },
});
```

Retrieves a single user by a unique field. Throws an error if the user does not exist.

---

## **6. Update**

```ts
const updatedUser = await prisma.user.update({
  where: { id: 1 },
  data: { name: "Mezba Abedin", email: "mezba@gmail.com" },
});
```

Updates a single user and returns the updated object.

---

## **7. Update Many**

```ts
const result = await prisma.user.updateMany({
  where: { id: { gt: 2 } },
  data: {
    profilePhoto: "https://programing-hero.com/level2/default-image.png",
  },
});
```

Updates multiple users matching the filter. Returns the count of updated rows.

---

## **8. Update Many and Return**

```ts
const updateProfilePhoto = await prisma.user.updateManyAndReturn({
  where: {
    id: {
      gt: 2,
    },
  },
  data: {
    profilePhoto: "https://programing-hero.com/level2/default-image.png",
  },
});
```

---

## **9. Delete**

```ts
const deletedUser = await prisma.user.delete({
  where: { id: 1 },
});
```

Deletes a single user by unique field and returns the deleted object.

---

## **10. Delete Many**

```ts
const result = await prisma.user.deleteMany({
  where: { id: { lt: 3 } },
});
```

Deletes multiple users matching the filter. Returns the count of deleted rows.

---

## **11. Order By**

```ts
const users = await prisma.user.findMany({
  orderBy: { createdAt: "desc" },
});
```

Sorts the results based on a field in ascending (`asc`) or descending (`desc`) order.

---

## **12. Contains (with case-insensitive mode)**

```ts
const users = await prisma.user.findMany({
  where: {
    name: { contains: "john", mode: "insensitive" },
  },
});
```

Performs a substring search in a string field with optional case-insensitivity.

---

> This guide follows the exact order of Prisma queries used in the `hello-prisma` repository, making it easy to understand and practice CRUD operations with PostgreSQL.

---

### **Documentations**

- [Prisma Official Website](https://www.prisma.io/)
- [Prisma Setup Guide (TypeScript + PostgreSQL)](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql)
- [Prisma Client CRUD Queries](https://www.prisma.io/docs/orm/prisma-client/queries/crud)

# Prisma ORM vs Sequelize vs TypeORM

## 1. Comparison: Prisma vs Sequelize vs TypeORM

Here’s a side-by-side look at the three, with their strengths, weaknesses, and where they tend to shine. I’ll keep it technical but clear.

| Feature / Quality                         | **Prisma**                                                                                                                                                                                              | **Sequelize**                                                                                                                                                                                     | **TypeORM**                                                                                                                                                                                                                             |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Origin / Approach**                     | Schema-first: you define a schema file (in Prisma’s datamodel language), then Prisma generates a client (queries etc.). Strong focus on type safety, modern developer experience. ([mindbowser.com][1]) | More traditional ORM style: define models, then use API to run queries, migrations etc. More mature, older, widely used. ([GeeksforGeeks][2])                                                     | Hybrid: supports decorators, entities, Active Record & Data Mapper patterns, so more flexible but also more complex. ([GeeksforGeeks][2])                                                                                               |
| **TypeScript / Type Safety**              | Very strong. Types are auto-generated. If your schema changes, many errors are caught at compile time. ([mindbowser.com][1])                                                                            | Has TypeScript definitions, but less strict; often requires manual typings, can have mismatches. ([GeeksforGeeks][2])                                                                             | Good TypeScript support. Decorators + metadata reflection help, but some parts are less strictly typed than Prisma. Also more “boilerplate” maybe. ([GeeksforGeeks][2])                                                                 |
| **Migrations / Schema Evolution**         | Prisma Migrate is a first-class component. Declarative migrations, you define the schema, automatic generation of migration files, easier to track changes. ([mindbowser.com][1])                       | Has migrations & seeders, but can require more manual work and can be less intuitive. Managing complex migrations can be more error-prone. ([DEV Community][3])                                   | Has built-in migration support; but with large projects, or frequent schema changes, managing migrations and keeping entities in sync can be trickier. ([mindbowser.com][1])                                                            |
| **Querying / API Design**                 | The auto-generated client gives a clean, modern API; type safety; fairly performant. Prisma encourages you to write more “explicit” queries rather than mixing raw SQL. ([mindbowser.com][1])           | Very flexible. Lots of options for associations, raw queries, complex joins, etc. But flexibility can come with complexity. ([GeeksforGeeks][2])                                                  | Also flexible; offers both “ActiveRecord” style (methods on models) and “Data Mapper” style; good for different architectural preferences. Decorators help define relationships. ([Medium][4])                                          |
| **Learning Curve / Developer Experience** | Modern UX. Prisma Studio (a GUI), helpful tooling. Cleaner schema and feedback. Better error messages, etc. ([GeeksforGeeks][2])                                                                        | Because older, many tutorials, large community; but older API conventions, sometimes more boilerplate, possibly more “gotchas.” ([Medium][5])                                                     | More initial setup; decorators / entities / config can be complex. But good for those who want “full control.” ([GeeksforGeeks][2])                                                                                                     |
| **Ecosystem / Community & Maturity**      | Pretty new (relative), but growing fast. Lots of companies adopting. Tools around it are improving. ([Prisma][6])                                                                                       | Very mature. Lots of plugins, legacy usage, many projects already using it. Large base of knowledge. ([DEV Community][3])                                                                         | Also mature, particularly in the TypeScript world. Has been around long enough. But some parts of the community feel slower to evolve compared to Prisma. ([GeeksforGeeks][2])                                                          |
| **Performance**                           | Generally good. The Prisma query engine is optimized. For many standard operations, Prisma can be quite efficient. But some very complex queries might require raw SQL. ([mindbowser.com][1])           | Performance depends a lot on how queries are structured; sometimes can have overhead. Using raw SQL or optimizing associations may be necessary. ([DEV Community][3])                             | Similar: good performance, but overheads may come from abstraction layers, lazy loading, etc. Requires awareness of how code generates queries. ([GeeksforGeeks][2])                                                                    |
| **Best Use Cases**                        | Projects using TypeScript; teams that want strong type safety; schema-first design; rapid development with fewer runtime surprises. Microservices, new apps where schema evolution is expected.         | Legacy apps; projects that need a tried-and-true ORM; working in JS (not TS) or mixed environments; cases with lots of custom raw SQL; or if devs are already comfortable with Sequelize’s model. | Projects that need flexibility in architecture; teams that like decorator/entity style; where you might want either Active Record or Data Mapper; applications with complex relationships and need more control over how mapping works. |

---

## 2. Explaining Like You’re 10 + Pros & Cons in Simple Terms

Here’s what each ORM is like, in kid-friendly language; then the good and not-so-good sides of each.

---

### Imagine Your Database is a Big Library

You have books (that’s data), and you want to find them, put new ones, change some, etc. You can talk directly in the library’s exact language (let’s call it SQL) — tough, big words, easy to make mistakes. ORMs are like helpers who learn your library’s language, and you just tell them in simpler words; they fetch/arrange/change books for you. They keep things safe (so you don’t lose books) and help you be faster.

---

### **Prisma**

Think of Prisma as a super helper who first asks you: “Hey, draw a blueprint of your library (what shelves, what kinds of books)”, then this helper builds you a special manual (client) that only lets you ask for books in ways that won’t mess up things. And there’s also a nice view (Studio) so you can peek into the library without walking around all aisles.

**Pros:**

- Harder to make mistakes because it checks things ahead of time (type safety).
- Clean and modern tools; when you change your library plan, Prisma helps adjust everything (migrations) gently.
- Good when you use TypeScript (which is like adding safety checks when writing code).
- Nice GUIs and developer tools make life pleasant.

**Cons:**

- If your library is super weird or you want to do strange requests, Prisma might get in your way.
- For very complex or raw custom SQL, you might have to drop to writing plain language (SQL) anyway.
- Slight learning overhead if you’re used to just writing raw queries.

---

### **Sequelize**

Sequelize is like a long-time library helper who’s been around, knows many different languages of libraries, and can do almost anything you ask. Doesn’t always check everything ahead of time so mistakes can sneak in.

**Pros:**

- Very flexible, tried and tested. Many people use it—lots of examples and help out there.
- Feels more familiar if you’ve done simpler database work before.
- Good if you want to do raw SQL sometimes and more complex custom work.

**Cons:**

- Not as strict with checking before things go wrong; more runtime errors.
- More setup and boilerplate sometimes. If you want safety (with TypeScript) you might need to do extra work.
- Developer experience (DX) might feel more old-school; fewer fancy tools.

---

### **TypeORM**

TypeORM is like having a helper who gives you more choice. You can decide how you want your library organized (different patterns), use fancy labels on your books, do things in multiple styles. But more choice means more things to think about.

**Pros:**

- Flexible: choose different styles of organizing data (Active Record vs Data Mapper).
- Good TypeScript support, use decorators (these are like putting tags/labels in your code) to describe how data relates.
- Mature enough; many use it especially in TS projects.

**Cons:**

- More moving parts; you have to understand how the patterns work. Might be more complex in big projects.
- Migrations / schema syncing can be harder to manage.
- There can be surprises in behavior if parts of the abstraction don’t match exactly what you expect (because of lazy loading, decorators, etc.).

---

### Quick Comparison (Kid-Friendly Summary)

- If you want something that helps you avoid mistakes, checks a lot for you, and gives really nice tools, **Prisma** is best.
- If you need something that has been used a lot, already proven, and very flexible, **Sequelize** is good.
- If you want flexibility in how you organize things and like decorating your code, **TypeORM** is a good middle ground but requires more learning.

---

## 3. Real-World Examples of Prisma ORM Usage

Here are how companies and projects are using Prisma in real life, plus some examples and resources:

- **Prisma Showcase** lists companies that use it in production. For example:

  - _Bucket_ — a feature management platform — uses Prisma to simplify relational queries and speed up feature releases. ([Prisma][6])
  - _Amplication_ — open source dev tool — uses Prisma in their backend. ([Prisma][6])
  - _Formbricks_ — survey platform — uses Prisma to help with scalability and performance. ([Prisma][6])

- **StackShare** shows many companies including _Graphy_, _Oxylabs_, _Cozero_ etc. are using Prisma in their tech stacks. ([StackShare][7])

- **TheirStack.com** reports thousands of companies (in the US alone, and globally) using Prisma. So it’s not just small scale — big companies too. ([TheirStack.com][8])

- **Prisma Examples** repository on GitHub: many example projects (demo/rest/GraphQL, using Next.js, etc.) showing how to structure apps with Prisma. Good for learning and seeing real setups. ([GitHub][9])

---

[1]: https://www.mindbowser.com/prisma-orm-typescript-guide/?utm_source=chatgpt.com "Prisma ORM: A Comprehensive Guide for TypeORM and Sequelize"
[2]: https://www.geeksforgeeks.org/javascript/comparison-of-popular-javascript-orms-prisma-typeorm-and-sequelize/?utm_source=chatgpt.com "Prisma, TypeORM, and Sequelize - JavaScript - GeeksforGeeks"
[3]: https://dev.to/victor1890/battle-of-the-nodejs-orms-sequelize-vs-prisma-3j8b?utm_source=chatgpt.com "Battle of the Node.js ORMs: Sequelize vs. Prisma - DEV Community"
[4]: https://medium.com/%40shariq.ahmed525/popular-orms-and-their-difference-prisma-typeorm-and-sequelize-564a83575eea?utm_source=chatgpt.com "Popular ORMs and Their Difference: Prisma, TypeORM ... - Medium"
[5]: https://medium.com/%40aman.ahmed1897/sequelize-vs-typeorm-vs-prisma-choosing-the-right-orm-for-your-node-js-project-11c39c8aceb0?utm_source=chatgpt.com "Sequelize vs TypeORM vs Prisma: Choosing the Right ORM for ..."
[6]: https://www.prisma.io/showcase?utm_source=chatgpt.com "Prisma Showcase | Customer Success stories"
[7]: https://stackshare.io/prisma?utm_source=chatgpt.com "Reviews, Pros & Cons | Companies using Prisma - StackShare"
[8]: https://theirstack.com/en/technology/prisma/us?utm_source=chatgpt.com "List of companies using Prisma in United States - TheirStack.com"
[9]: https://github.com/prisma/prisma-examples?utm_source=chatgpt.com "Ready-to-run Prisma example projects - GitHub"
