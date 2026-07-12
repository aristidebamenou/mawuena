/* Les soins proposés — modifier un tarif ou ajouter un soin se fait ici. */

import soin1 from '../assets/images/soin-1.jpg';
import soin2 from '../assets/images/soin-2.jpg';
import soin3 from '../assets/images/soin-3.jpg';

export const SOINS = [
  {
    titre: 'Le massage signature',
    description:
      "Un soin enveloppant du corps entier, alliant pressions profondes et gestes lents pour relâcher les tensions et retrouver l'ancrage.",
    tarif: '60 / 90 min — à partir de 00 €',
    image: soin1,
    alt: "Massage profond du dos, avant-bras et mains de la praticienne en appui sur une serviette verte",
  },
  {
    titre: 'Le rituel aux huiles chaudes',
    description:
      "Des huiles naturelles chauffées, appliquées en mouvements continus, pour une détente profonde du corps et de l'esprit.",
    tarif: '75 min — à partir de 00 €',
    image: soin2,
    alt: "Huile de massage versée au creux de la main de la praticienne, au-dessus du dos d'une personne allongée",
  },
  {
    titre: 'Le cocon enveloppant',
    description:
      'Matières naturelles — coton tissé, lin — et gestes de maintien qui caressent, apaisent et accompagnent le retour à soi.',
    tarif: '60 min — à partir de 00 €',
    image: soin3,
    alt: "Praticienne ajustant délicatement une serviette en coton vert sur le dos d'une personne allongée",
  },
];