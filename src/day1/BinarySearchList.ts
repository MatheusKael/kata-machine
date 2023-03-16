export default function bs_list(haystack: number[], needle: number): boolean { 
    let high= haystack.length; 
    let low = 0;
    do { 
        const middle = Math.floor (low + (high - low) / 2 );
        const value_in_middle = haystack[middle]

        if(value_in_middle == needle) { 
        return true
        } else if (value_in_middle > needle) {
            high = middle;
        } else { 

            low =middle + 1;

        }

    } 
    while ( low < high )

    return false
}
