import { sleep } from "$lib/utils";

export async function load() {
  return {
    stuff: sleep(1000).then(() => "about nice stuff, but no CSP?"),
  };
}
