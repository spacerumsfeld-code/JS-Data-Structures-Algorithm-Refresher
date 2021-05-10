const HospitalQueue = require('../8-priority-queue.js');

let mercyHospital = new HospitalQueue();
mercyHospital.queue('GSW', 1);
mercyHospital.queue('Sore Thumb', 3);
mercyHospital.queue('Cracked Rib', 2);

  describe('The Hospital Queue System should be able to properly put patients in line to get treated and manage their order as current patients get treated and new patietns arrive', () => {
    it('It should have a "queue" method for patients', () => {
      expect(HospitalQueue.toString().includes('queue')).toBe(true);
    });

    it('It should have a "dequeue" method to get the highest priority patient to treatment', () => {
      expect(HospitalQueue.toString().includes('dequeue')).toBe(true);
    });

    it('Should have the ability to properly sort patients by priority as they are admitted to the hospital', () => {
      expect(mercyHospital.values[0].val).toEqual('GSW');
      expect(mercyHospital.values[1].val).toEqual('Sore Thumb');
      expect(mercyHospital.values[2].val).toEqual('Cracked Rib');
    });

    it('Should dequeue the highest priority patient for treatment', () => {
      expect(mercyHospital.dequeue().val).toEqual('GSW');
    });

    it('Should reshuffle current patients in order of priority after a patient has been dequeued for treatment', () => {
      mercyHospital.queue('GSW', 1);
      mercyHospital.dequeue();
      expect(mercyHospital.values[0].val).toEqual('Cracked Rib');
      expect(mercyHospital.values[1].val).toEqual('Sore Thumb');
    });
  });