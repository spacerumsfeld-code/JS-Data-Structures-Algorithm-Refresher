Hash Tables
//Disclaimer: javascript has already-built hash tables in the form of objects and maps! What follows, then, is an educational experience in building a hash map from scratch so that we can better understand how they work.

//A hash table is a structure that stores key values pairs. We will be using an array to reconstruct a hash table, as using an object is a bit like cheating since it is an implementation of a hash graph!

//A hash table uses a hash function to generate an index in our array to store the provided key value pair; thus, a hash table is only as good as its hash function. We will have an array of arrays in which each index is a key value pair, represented by an array with array[0] being the key and array[1] being the value.

The Hash function
//A hash function's simple definition is a function that takes an input of arbitrary length and maps it to an output of an arbitrary size, deterministically. Thus if we provide the exact same input, we ought to receive the exact same output, every time. Additionally, hash functions are generally one way: we cannot determine the input just from the output hash.

//Note: the below hash functions will only work with strings. All that matters is that we learn the inner workings of a hash table more generally; we are not here to design the perfect hash table as there are plenty of people who have worked on -- and are still working on -- that for us.

//Let's get to building a rudimentary hash function. Our hash function should have the following properties:
//Distributes inputs uniformly
//Fast (constant time)
//Deterministic (the same input already generates the same hash)

//Here is a sample hash function. It uses bitwise operations to get the job done. The key to understand here is that we need to include the max possible index as input, as our hash table has a set size (that can be dynmaically readjusted, but for the purposes of generating a hash for an insertion our length is fixed). We use the max as an additional constraint to limit the potential index generated to be within our actual hash table length.

  const indexGenerator = (str, max) => {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

//Here is another example. This hash function makes use of a prime number to help achieve more uniform key distribution than might occur otherwise. Bonus tip, if your hash table length (in our construction, our array length) is a prime number, magically this hash function achieves even better distribution of keys. Why? Math is magical, that is why (I have no idea why beyond this asssertion).

//In conjunction with initializing our hash table with a prime number size, this hash table will minimize hash table collisions.

function hash(key, max) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

Handling collisions
//Sometimes, our hash function will generate the same index for a different input; it is inevitable. There are multiple ways to handle this undeniable reality. We will cover two solutions here and implement one of them.

//Linear probing:
//When a collision occurs, we may solve it with a method called linear probing. Linear probing is the act of looking forward to higher indexes for one that is unoccupied, then depositing our input k-v pair there.

//Separate Chaining
//Separate chaining is another method for handling collisions. In this method, each index becomes a bucket of sorts that can hold multiple key-value pairs. So, in the case of our representation of a hash table as an array, if there is a collision, the element at the generated collision index becomes an array of arrays, with the formerly colliding key value pairs residing in peace next to one another in the array of arrays, as arrays (that was a wee bit of a mouthful). This is the strategy we will adopt as it is rather straightforward.

//Well then, with these preliminaries out of the way, let's go and build our own hash table! We will initialize get and set methods for retrieval and insertion, as well as 'get keys' and 'get values' methods for outputting the keys of the hash table and the values of the hash table.
