const styles = {
  container: {
    width: 300,
    height: 300,
    borderRadius: 2,
    boxShadow: 5,
  },
  image: {
    objectFit: 'cover',
    width: 300,
    height: 300,
    borderRadius: 2,
    // borderTopRightRadius: 5,
    // borderTopLeftRadius: 5,
  },
  aboutGroup: {
    position: 'relative',
    borderRadius: 2,
    height: '50%',
    top: -150,
    background: 'linear-gradient(rgba(255,255,255,0), rgba(0,0,0,1))',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
};

export { styles };
