import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { createRef } from '@motion-canvas/core/lib/utils';
import { all } from '@motion-canvas/core/lib/flow';

export default makeScene2D(function* (view) {
    // Referências para os elementos
    const profileImage = createRef();
    const skillTags = createRef();
    const projectCards = createRef();

    // Animação da foto de perfil
    yield* all(
        profileImage().scale(0, 1, 0.5),
        profileImage().opacity(0, 1, 0.5)
    );

    // Animação das skills
    yield* skillTags().forEach((tag, i) => {
        return all(
            tag.scale(0, 1, 0.3),
            tag.opacity(0, 1, 0.3)
        );
    });

    // Animação dos cards de projeto
    yield* projectCards().forEach((card, i) => {
        return all(
            card.y(50, 0, 0.5),
            card.opacity(0, 1, 0.5)
        );
    });
}); 