import React from 'react';
import PropTypes from 'prop-types';
import A from '../components/A';
import Form from '../components/Form';
import generateJSONFile from '../utils/generateJSONFile';

const EncryptOutput = ({ outputData }) => {
  const jsonOutput =
    outputData.encrypted.text && generateJSONFile(outputData.encrypted);
  return (
    <Form>
      {outputData.loading && (
        <div style={{ position: 'absolute' }}>LOADING</div>
      )}
      <Form.Label>
        <Form.Span>Зашифрований текст (шифротекст)</Form.Span>
        <Form.Textarea
          rows="15"
          type="input"
          name="output-text"
          value={outputData.encrypted.text || 'зашифрованний текст...'}
          readOnly
        />
      </Form.Label>
      <Form.Label>
        <Form.Span>Ключ шифрування</Form.Span>
        <Form.Input
          type="input"
          name="output-key"
          value={outputData.encrypted.key || 'секретний ключ шифрування...'}
          readOnly
        />
      </Form.Label>
      <Form.Row Margin="25px auto 0 auto">
        <A href={jsonOutput} download="encrypted-data.json" primary>
          Завантажити JSON
        </A>
      </Form.Row>
    </Form>
  );
};

EncryptOutput.propTypes = {
  outputData: PropTypes.object.isRequired,
};

export default EncryptOutput;