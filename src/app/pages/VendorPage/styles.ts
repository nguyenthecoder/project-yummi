const styles = {
  container: {
    padding: 2,
  },
  image: {
    width: '100%',
    height: '30%',
    objectFit: 'coever',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  header: {
    display: 'flex',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'white',
    padding: 1,
    borderRadius: 3,
    boxShadow: 3,
    display: 'flex',
    justifyContent: 'center',
  },
  toTopButton: {
    position: 'fixed',
    backgroundColor: 'orange',
    bottom: 20,
    right: 20,
    padding: 1,
    borderRadius: 3,
    boxShadow: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

};

export { styles };
