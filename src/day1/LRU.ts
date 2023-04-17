
type Node<T> = {
    value: T
    prev?: Node<T>
    next?: Node<T>
}

function createNode<V>(value: V): Node<V> {
    return { value }
}

export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>
    private tail?: Node<V>
    private lookup: Map<K, Node<V>>
    private reverseLookup: Map<Node<V>, K>


    constructor(private capacity: number = 10) {
        this.length = 0
        this.head = this.tail = undefined
        this.lookup = new Map<K, Node<V>>()
        this.reverseLookup = new Map<Node<V>, K>()
    }


    update(key: K, value: V): void {

        let node = this.lookup.get(key)

        if (!node) {
            node = createNode(value)
            this.length++
            this.prepend(node)
            this.trimCache()
        } else {
            this.detach(node)
            this.prepend(node)
        }

    }
    get(key: K): V | undefined {

        const node = this.lookup.get(key)

        if (!node) {
            return undefined
        }

        this.detach(node)
        this.prepend(node)

        return node.value
    }

    private detach(node: Node<V>) {
        if (node.prev) {
            node.prev.next = node.next
        }
        if (node.next) {
            node.next.prev = node.prev
        }

        if (this.length === 1) {
            this.tail = this.head = undefined
        }


        if (this.head === node) {
            this.head = this.head?.next
        }

        if (this.tail === node) {
            this.tail = this.tail.prev
        }


        node.next = undefined
        node.prev = undefined

    }
    private prepend(node: Node<V>) {
    }
    private trimCache() {
    }
}
