const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 50,
      textAlign: 'center',
      color: 'skyblue'
    },
  };
  
  const HomeView = () => (
    <div style={styles.container}>
      <h1 style={styles.title}>Phone Book</h1>
    </div>
  );
  
  export default HomeView;