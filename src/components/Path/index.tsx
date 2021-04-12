import { Container, DrawPath } from './styles';

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
}

function Path() {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <DrawPath
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </Container>
  );
};

export default Path;
