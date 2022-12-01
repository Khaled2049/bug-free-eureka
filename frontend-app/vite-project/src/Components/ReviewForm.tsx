import React, { FormEvent, useRef, useState } from "react";
import CreatableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { Form, Row, Col, Stack, Button } from "react-bootstrap";
import { ReviewData, Tag } from "../types/index";

type ReviewFormProps = {
  onSubmit: (data: ReviewData) => void;
};

const ReviewForm = ({ onSubmit }: ReviewFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setselectedTags] = useState<Tag[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group ref={titleRef} controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required />
            </Form.Group>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                isMulti
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setselectedTags(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
              />
            </Form.Group>
            <Form.Group controlId="markdown">
              <Form.Label>Body</Form.Label>
              <Form.Control
                required
                ref={markdownRef}
                as="textarea"
                rows={15}
              />
            </Form.Group>
            <Stack
              className="justify-content-end"
              direction="horizontal"
              gap={3}
            >
              <Button type="submit">Save</Button>
              <Link to="..">
                <Button type="button" variant="danger">
                  Cancel
                </Button>
              </Link>
            </Stack>
          </Col>
        </Row>
      </Stack>
    </Form>
  );
};

export default ReviewForm;
