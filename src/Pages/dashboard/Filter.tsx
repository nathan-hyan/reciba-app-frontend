import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Accordion, Button, Card, Col, Form, Row } from 'react-bootstrap';
import { queryType } from '../../Interfaces/invoice';
import moment from 'moment';
import { dateConverter } from '../../utils/dateConverter';

export default function Filter({
  submitFilter,
  isLoading,
  setIsLoading
}: {
  submitFilter: (query: queryType) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}) {
  const [query, setQuery] = useState<queryType>({
    from: '',
    to: '',
    tags: ''
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    submitFilter({
      from: query.from
        ? moment(query.from).startOf('day').format('YYYY-MM-DD')
        : 'undefined',
      to: query.to
        ? moment(query.to).endOf('day').format('YYYY-MM-DD')
        : 'undefined',
      tags: query.tags
    });
  };

  const clearSearch = () => {
    setIsLoading(true);
    submitFilter({});
    setQuery({ from: '', to: '', tags: '' });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    let { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  const filterDisplay = () => {
    if (query.from || query.to) {
      return (
        <small className="text-muted border rounded p-1">
          {`${
            query.from
              ? `Desde: ${moment(dateConverter(query.from)).format('L')}`
              : ''
          } ${
            query.to
              ? `Hasta: ${moment(dateConverter(query.to)).format('L')}`
              : ''
          }`}
        </small>
      );
    } else {
      return (
        <small className="text-muted border rounded p-1">
          {`Mostrando las boletas de ${Intl.DateTimeFormat(navigator.language, {
            month: 'long'
          }).format(new Date())}`}
        </small>
      );
    }
  };

  return (
    <Col className="bg-white rounded shadow p-3 mb-3">
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Filtros {filterDisplay()}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Etiqueta</Form.Label>
                      <Form.Control
                        name="tags"
                        value={query.tags}
                        onChange={handleChange}
                        type="text"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Desde</Form.Label>
                      <Form.Control
                        type="date"
                        onChange={handleChange}
                        name="from"
                        value={query.from}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Hasta</Form.Label>
                      <Form.Control
                        type="date"
                        onChange={handleChange}
                        name="to"
                        value={query.to}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-end w-100">
                    <Button
                      disabled={isLoading}
                      className="mr-3"
                      variant="success"
                      type="submit"
                    >
                      <FontAwesomeIcon icon={faSearch} /> Buscar
                    </Button>

                    <Button
                      disabled={isLoading}
                      onClick={clearSearch}
                      variant="danger"
                    >
                      <FontAwesomeIcon icon={faTimesCircle} /> Limpiar búsqueda
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Col>
  );
}