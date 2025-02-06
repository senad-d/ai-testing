import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TableContainer, StyledTable } from '../styles';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTable: React.FC = () => {
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    if (tableRef.current) {
      const rows = tableRef.current.querySelectorAll('tr');

      gsap.fromTo(
        rows,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <TableContainer>
      <StyledTable ref={tableRef}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Software Engineer</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Data Scientist</td>
          </tr>
          <tr>
            <td>Emily Johnson</td>
            <td>Project Manager</td>
          </tr>
          <tr>
            <td>Michael Brown</td>
            <td>DevOps Engineer</td>
          </tr>
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export { AnimatedTable };