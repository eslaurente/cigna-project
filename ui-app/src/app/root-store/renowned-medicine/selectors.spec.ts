import { selectFilteredSpecialists } from './selectors';

describe('renownedMedicine selectors', () => {
  describe('selectFilteredSpecialists', () => {
    const state = {
      renownedMedicine: {
        specialists: [
          {
            name: 'Louis Pasteur',
            specialty: 'Molecular Asymmetry',
          },
          {
            name: 'Dr. Jean-Martin Charcot',
            specialty: 'Pathology',
          },
          {
            name: 'Dr. Edward Jenner',
            specialty: 'Immunology',
          },
          {
            name: 'Dr. Andreas Vesalius',
            specialty: 'Father of Modern Anatomy',
          },
          {
            name: 'Sir Joseph Lister',
            specialty: 'Antiseptic Surgery',
          },
          {
            name: 'Hippocrates',
            specialty: 'Father of Western Medicine',
          },
          {
            name: 'Sir William Osler',
            specialty: 'Father of Modern Clinical Practice',
          },
        ],
        isLoading: false,
      },
    };

    it('filters specialists by substring against name', () => {
      const expected = [
        {
          name: 'Sir Joseph Lister',
          specialty: 'Antiseptic Surgery',
        },
        {
          name: 'Sir William Osler',
          specialty: 'Father of Modern Clinical Practice',
        },
      ];
      const result = selectFilteredSpecialists(state, 'sir');
      expect(result).toEqual(expected);
    });

    it('filters specialists by substring against specialty', () => {
      const expected = [{
        name: 'Dr. Edward Jenner',
        specialty: 'Immunology',
      }];

      const result = selectFilteredSpecialists(state, 'immunology');
      expect(result).toEqual(expected);
    });

    it('filters specialists by substring against both name and specialty', () => {
      const expected = [
        {
          name: 'Louis Pasteur',
          specialty: 'Molecular Asymmetry',
        },
        {
          name: 'Dr. Jean-Martin Charcot',
          specialty: 'Pathology',
        },
      ];

      const result = selectFilteredSpecialists(state, 'pa');
      expect(result).toEqual(expected);
    });
  });
});
