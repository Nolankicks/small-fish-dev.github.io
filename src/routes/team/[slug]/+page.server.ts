import { Members, type Member } from '$lib/types/Member';

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return Members.map( function(m) {
        return { slug: decodeURI(m.name).toLocaleLowerCase() } 
    } );
}

export const prerender = true;