export class MockData {
  createDb() {
    let planes = [
        {"id": 1, "model": "B747", "sitsCount" :3},
        {"id": 2, "model": "A747", "sitsCount" :3},
        {"id": 3, "model": "F747", "sitsCount" :3}
    ];
    let heroes = [
      { id: '1', name: 'Windstorm' },
      { id: '2', name: 'Bombasto' },
      { id: '3', name: 'Magneta' },
      { id: '4', name: 'Tornado' }
    ];
    return {planes, heroes};
  }
}
