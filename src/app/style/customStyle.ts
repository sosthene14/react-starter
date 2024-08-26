
export const customStylesTable = {
  header: {
    style: {
      minHeight: '56px',
      backgroundColor: '#334155', // Gris foncé pour le header
      color: 'white',
    },
  },
  headRow: {
    style: {
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      color: 'white',
      backgroundColor: '#334155', // Gris foncé pour le header
      borderTopColor: 'rgba(0, 0, 0, 0.12)',
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: 'rgba(0, 0, 0, 0.12)',
      },
      color: 'white',
      backgroundColor: '#475569', // Gris légèrement plus clair pour les cellules du header
    },
  },
  rows: {
    style: {
      minHeight: '48px',
      backgroundColor: '#F1F5F9', // Fond gris clair pour les lignes
      '&:nth-of-type(even)': {
        backgroundColor: '#E2E8F0', // Alternance des couleurs pour les lignes paires
      },
      '&:hover': {
        backgroundColor: '#CBD5E1', // Couleur lors du hover
        cursor: 'pointer',
      },
    },
  },
  cells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      '&:not(:last-of-type)': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        borderRightColor: 'rgba(0, 0, 0, 0.12)',
      },
    },
  },
};
