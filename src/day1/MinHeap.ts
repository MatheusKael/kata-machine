export default class MinHeap {
    public length: number;
    public data: Array<number>



    constructor() {
        this.length = 0
        this.data = []
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length)
        this.length++
    }
    delete(): number {

        if(this.length == 0 ) { 
            return -1;
        }

        this.length--
        const out = this.data[0]
        if(this.length === 0) { 
            this.data = [ ]
            return out
        }

        this.data[0] = this.data[this.length]
        this.heapifyDown(0)
        return out    
    }   

    private heapifyDown(idx: number): void {
    
        const lIdx = this.leftChild(idx)
        const rIdx = this.rightChild(idx)

        if(idx >= this.length || lIdx >= this.length){
            return;
        }
        const lv = this.data[lIdx]
        const rv = this.data[rIdx]
        const v = this.data[idx]

        if(lv > rv && v > rv) {
            this.data[idx] = rv;
            this.data[rIdx] = v;
            this.heapifyDown(rIdx)

        } 
        else if(rv >lv && v > lv) { 
             
            this.data[idx] = lv;
            this.data[lIdx] = v;
            this.heapifyDown(lIdx)
        
        }
        
    } 

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const p = this.parent(idx)
        const parentV = this.data[p]
        const v = this.data[idx]

        if (parentV > v) {
            this.data[idx] = parentV
            this.data[p] = v
            this.heapifyUp(p)
        }

    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2)
    }
    private leftChild(idx: number): number {
        return idx * 2 + 1
    }
    private rightChild(idx: number): number {
        return idx * 2 + 2
    }
}
