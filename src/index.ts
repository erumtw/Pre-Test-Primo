export function merge(collection_1: number[],collection_2: number[]) : number[] {
    let merge_result: number[] = []
    let i = 0, j = 0;

    while( i < collection_1.length && j < collection_2.length) {
        if(collection_1[i] < collection_2[j]) {
            merge_result.push(collection_1[i])
            i++
        } else {
            merge_result.push(collection_2[j])
            j++
        }
    }

    if (collection_1 != collection_2) {
        while(i < collection_1.length ) {
            merge_result.push(collection_1[i])
            i++
        }
    
        while(j < collection_2.length ) {
            merge_result.push(collection_2[j])
            j++
        }
    }

    return merge_result
}

