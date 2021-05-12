const Graph = require('../10-graph.js');

let test = new Graph();

beforeEach(() => {
  test = new Graph();
  test.addVertex('A');
  test.addVertex('B');
  test.addVertex('C');
  test.addVertex('D');
  test.addVertex('E');
  test.addVertex('F');
  test.addEdge('A', 'B');
  test.addEdge('A', 'C');
  test.addEdge('B', 'D');
  test.addEdge('C', 'E');
  test.addEdge('D', 'E');
  test.addEdge('D', 'F');
  test.addEdge('E', 'F');
});

  describe('Our graph should have all of the requisite methods and they should work properly', () => {
    describe('Our graph should have all of the requisite methods', () => {
      it('Should have an "addVertex" method', () => {
        expect(Graph.toString().includes('addVertex')).toBe(true);
      });

      it('Should have an "addEdge" method', () => {
        expect(Graph.toString().includes('addEdge')).toBe(true);
      });

      it('Should have a "removeVertex" method', () => {
        expect(Graph.toString().includes('removeVertex')).toBe(true);
      });

      it('Should have a "removeEdge" method', () => {
        expect(Graph.toString().includes('removeEdge')).toBe(true);
      });

      it('Should have a "dfs" method', () => {
        expect(Graph.toString().includes('dfs')).toBe(true);
      });

      it('Should have a "bfs" method', () => {
        expect(Graph.toString().includes('bfs')).toBe(true);
      });
    });

    describe('All of the methods should work as intended', () => {
      it('The addVertex method should successfully add a node to the graph', () => {
        expect(Object.keys(test.list)).toStrictEqual(['A','B','C','D','E','F']);
      });

      it('The addEdge method should successfully add edges between nodes in the graph', () => {
        expect(test.list['A'].includes('B')).toBe(true);
        expect(test.list['B'].includes('A')).toBe(true);
        expect(test.list['E']).toStrictEqual(['C','D','F']);
      });

      it('The addEdge method should return false if either of the specified nodes does not exist in the graph', () => {
        expect(test.addEdge('A','X')).toBe(false);
      });

      it('The removeVertex method should remove a node from the graph', () => {
        test.removeVertex('A');
        expect(Object.keys(test.list).includes('A')).toBe(false);
      });

      it('The removeVertex method should also remove edges other nodes may have had with the removed node', () => {
        test.removeVertex('A');
        expect(test.list['B'].includes('A')).toBe(false);
        expect(test.list['C'].includes('A')).toBe(false);
      });

      it('The removeVertex method should return undefined if the input node is not present in the graph', () => {
        expect(test.removeVertex('X')).toBe(false);
      });

      it('The removeEdge method should remove the edge between two input nodes', () => {
        test.removeEdge('A','B');
        expect(test.list['A'].includes('B')).toBe(false);
        expect(test.list['B'].includes('A')).toBe(false);
      });

      it('The removeEdge method should return false if either of the input nodes do not exist', () => {
        expect(test.removeEdge('A','X')).toBe(false);
      });

      it('The dfs method should return an array of node values in dfs order', () => {
        expect(test.dfs('A')).toStrictEqual(['A','B','D','E','C','F']);
      });

      it('The bfs method should return an array of node values in bfs order', () => {
        expect(test.bfs('A')).toStrictEqual(['A','B','C','D','E','F']);
      });
    });
  })