export default async function fetchData(): Promise<{name:string}[]> {
    const res = await fetch(`http://localhost:3000/api/employee`);
  
    if (res.status !== 200) {
      throw new Error(`Status ${res.status}`);
    }
    return res.json();
  }
  