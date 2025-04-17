import {
  index,
  prefix,
  route,
  type RouteConfigEntry,
} from "@react-router/dev/routes";
import { camelize, pluralize, singularize } from "inflected";

export function createCrud(base = "./views") {
  /**
   * Create a CRUD route configuration.
   * @param name The name of the resource. It will be pluralized for the path.
   * @param options The options for the crud.
   * @param options.member Extra routes to add to each member.
   * @param options.collection Extra routes to add to the collection.
   *
   * @example
   * export default [
   *   crud("contacts"),
   *   crud("users", {
   *     member: [route("ban", "views/users/ban.ts")],
   *     collection: [route("search", "views/users/search.ts")],
   *   })
   * ] satisfies RouteConfig;
   */
  return function crud(
    name: string,
    { member = [], collection = [] }: Options = {},
  ) {
    let plural = pluralize(name);
    let camelCase = camelize(singularize(name), false);

    return route(
      plural,
      `${base}/${plural}/layout.tsx`,
      { id: `${name}.layout` },
      [
        index(`${base}/${plural}/index.tsx`, { id: `${name}.index` }),
        route("new", `${base}/${plural}/new.tsx`, { id: `${name}.new` }),
        ...prefix(`:${camelCase}Id`, [
          index(`${base}/${plural}/show.tsx`, { id: `${name}.show` }),
          route("edit", `${base}/${plural}/edit.tsx`, { id: `${name}.edit` }),
          route("destroy", `${base}/${plural}/destroy.ts`, {
            id: `${name}.destroy`,
          }),
          ...member,
        ]),
        ...collection,
      ],
    );
  };

  interface Options {
    member?: RouteConfigEntry[];
    collection?: RouteConfigEntry[];
  }
}
